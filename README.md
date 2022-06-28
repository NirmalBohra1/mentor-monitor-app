# Shiksha Platform Frontend (Uses Module Federation)

## Create New Module

- copy module-template to modules/[module-name]
- update `modules/[module-name]/package.json`

```
{
"name": "[module-name]",
...
}
```

- Update modules/[module-name]/craco.config.js and assign a port for dev environment.

```
module.exports = {
  devServer: {
    port: 3001,
  },
  ...
```

- update `modules/[module-name]/moduleFederation.config.js `

```
...
module.exports = {
  name: "[module-name]",
...

```

# Run All Modules and Host Application

- Install dependency

```
yarn install
```

- Run all modules

```
yarn start
```

# Build Application for Production

```
yarn build

```

# Run Module as Standalone Application

```
lerna run start --scope=[module-name]

```

# Use Module in Host Application

- Add remote module url to remotes in `apps/[host-app]/moduleFederation.config.js `

```

# e.g. core module is runninig on localhost:3001 then

  remotes: {
    core: 'core@[window.appModules.core.url]/remoteEntry.js',
  },
```

- Add entry to `modules.json`

```
# e.g. core module is runninig on localhost:3001 then

{
    "core":{
        "url": "http://localhost:3001"
    },
    ...
}
```

- To use exposed component from remote module in react.
  The lazy load componennt must be enclosed within `<React.Suspense>`

```
# e.g. usiing AppShell component from core module

const AppShell = React.lazy(() => import("core/AppShell"));
...
<React.Suspense fallback="Loading ">
 <AppShell/>
</React.Suspense>
```

# Developer Documents

https://shiksha-platform.github.io/docs/Developer/Frontend/
