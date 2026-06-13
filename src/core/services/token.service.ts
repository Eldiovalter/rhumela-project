export class TokenService {
  save(token: string) {
    console.log(token);
  }

  get() {
    return null;
  }

  remove() {}
}

export const tokenService =
  new TokenService();