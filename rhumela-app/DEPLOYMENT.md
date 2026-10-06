# Deploy web no Cloudflare Workers

Esta configuração publica apenas o frontend Expo. `../rhumela-api/` contém
ficheiros vazios: este PR não implementa nem publica o backend. A autenticação
e a persistência de tokens continuam incompletas. Validar estes fluxos e uma API
real antes de promover a aplicação a produção.

## Ambiente reproduzível

Executar a partir de `rhumela-app/`, com Node **24.19.0** e npm **11.9.0**.
Usar `nvm install` / `nvm use` se disponível. O Wrangler está fixado em **4.100.0**;
o lockfile deriva do PR #1, preservando as versões existentes da aplicação.

```sh
cd rhumela-app
npm ci --include=dev
export EXPO_PUBLIC_API_URL='https://api.SEUDOMINIO/api'
npm run deploy:check
npm run preview
```

Substituir o domínio acima pela API real. Os scripts de build exigem a variável
no ambiente do processo (shell ou CI), antes de o Expo carregar ficheiros `.env`.
Uma URL ausente, HTTP, loopback ou com credenciais bloqueia o build.
O valor é público e fica incorporado no bundle; mudar a URL exige novo build.
Não usar chaves privadas, tokens de pagamento ou credenciais Cloudflare em
variáveis `EXPO_PUBLIC_*`. Manter os segredos no backend/gestor de segredos.

`npm run preview` serve localmente com Wrangler; não publica um preview remoto.
`npm run deploy:check` faz build e dry-run, sem publicar. Testar a página inicial,
assets, navegação, refresh e chamadas à API. Uma exportação bem-sucedida não
valida autenticação, pagamentos nem disponibilidade do backend.

## Workers Builds

Confirmar no painel, antes de ligar a publicação automática:

| Definição | Valor |
| --- | --- |
| Repositório | `Eldiovalter/rhumela-project` |
| Branch de produção | `main` |
| Root directory | `rhumela-app` |
| Node / npm | `24.19.0` / `11.9.0` |
| Build command | `npm ci --include=dev && npm run build:web` |
| Deploy command | `npx --no-install wrangler deploy` |
| Non-production version upload (Wrangler 4.100.0) | `npx --no-install wrangler versions upload` |
| Build variable | `EXPO_PUBLIC_API_URL`, apontando à API do ambiente |

O build é executado uma vez antes do deploy; não usar `npm run deploy` neste
campo se o build já estiver configurado separadamente. Confirmar a conta,
Worker `rhumela-project`, domínio e permissões do token. Usar token limitado
à conta/permissões necessárias e guardado como segredo. Configurar previews
explicitamente, com API de teste; nunca apontá-los automaticamente a dados reais.

## Publicação manual e rollback

Após validar o preview e o destino (`npx --no-install wrangler whoami`),
`npm run deploy` reconstrói e publica no Worker `rhumela-project` da conta
autenticada. Pode substituir a versão que está em produção.
Registar o SHA Git e os IDs da versão/deployment. Para reverter, selecionar
a versão anterior validada em Deployments no painel Cloudflare e executar
Rollback. Confirmar novamente a página, assets e chamadas à API.

## Limites e configuração de rotas

A configuração serve `dist/` e não contém código Worker, bindings ou backend.
O flag `nodejs_compat` do PR #1 não é necessário para servir estes assets.
A navegação atual não configura URLs/deep links. Se forem introduzidos,
configurar e testar o linking no cliente e o fallback SPA
`assets.not_found_handling: "single-page-application"`; não tratar endpoints
de API como rotas da SPA.

A API real deve oferecer HTTPS, autenticação e CORS para as origens autorizadas.
O serviço de tokens já não escreve credenciais na consola, mas continua a ser
um placeholder: não interpretar este PR como implementação de login seguro.
