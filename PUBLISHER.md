# Publisher notes

Pushes to `development` / `sandbox` still publish automatically via trusted publishing (`npm publish --tag beta`).

Promoting a version to **latest** is **manual**. Trusted publishing (OIDC) only authenticates `npm publish`, not `npm dist-tag`.

## Promote a beta version to latest

1. Confirm the same version already exists on npm as `beta` (from the development workflow).
2. Log in to npm (an account with write access to `@orchidui/core` and `@orchidui/dashboard`):

   ```bash
   npm login
   ```

3. Read the version from `package.json` (core and dashboard should match):

   ```bash
   node -p "require('./packages/core/package.json').version"
   node -p "require('./packages/dashboard/package.json').version"
   ```

4. Move the `latest` tag to that version:

   ```bash
   npm dist-tag add @orchidui/core@<VERSION> latest
   npm dist-tag add @orchidui/dashboard@<VERSION> latest
   ```

   Example for `1.114.0`:

   ```bash
   npm dist-tag add @orchidui/core@1.114.0 latest
   npm dist-tag add @orchidui/dashboard@1.114.0 latest
   ```

5. Verify the tags:

   ```bash
   npm dist-tag ls @orchidui/core
   npm dist-tag ls @orchidui/dashboard
   ```

Do not run `npm publish` again for a version that already exists; npm will reject a republish. Use `dist-tag` as above.
