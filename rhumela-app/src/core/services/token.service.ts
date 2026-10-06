export class TokenService {
  save(_token: string) {
    // Token persistence is not implemented yet. Never log credentials.
  }

  get() {
    return null;
  }

  remove() {}
}

export const tokenService =
  new TokenService();
