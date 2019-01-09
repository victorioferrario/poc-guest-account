# RCCL Packages POC

## POC Overview

To start with, the POC contains 3 "layers" of "repositories".

### Integration layer
The first layer is the integration layer where the packages are integrated, now described by the `app-repo`. Where you can install the differentpackages from npm public or private as needed. Also it supports linking in order for development to be done easily. More info on how to work with this later.

### Features layer

The second layer is composed of "feature" repositories, for the sake of the POC we only have one called `features-repo` where we have 3 packages, `@rccl/cruise-bookings` `@rccl/folio` and `@rccl/guest-account` where `@rccl/folio` is a dependency of `@rccl/guest-account`.

The idea over this layer is to have one repository per team maybe where different packages owned by them are living and published as needed.

For the sake of the POC we will have one only.

### Libs layer

The last layer is composed of "libs" packages in one repository, where teams can add changes as needed to the shared packages. Here we have the package `@rccl/logging` which is required by most of the other `@rccl` packages.

### NPM Registry

For the sake of the POC, we will use a dockerized npm registry which is already configured, running `docker-compose up -d` in the root of the repository should do the trick. Before running the start command we need to create the admin user for the registry, with `./generate-user.sh admin`, after this password will be prompt.

## Building packages

In order to build the different packages we need to run `npm run build [package folder]` or `yarn build [package folder]` in the root of the layer "repository". As example go to `libs-repo` and execute `yarn build logging`, this should build the `@rccl/logging` package into `dist/libs/logging`.

Just FYI, in case of building a package that depends on another one some changes should be done.

First of all in `tsconfig.json` the paths object should have the dependent package there with two entried, one for the source code file and one another pointing to the `dist` folder. As example, lets suppose we want to build `@rccl/guest-account` which depends on `@rccl/folio`, if we build directly `@rccl/guest-account` it will fail. We need to add `dist/libs/folio` to the `@rccl/folio` path config.

Second we need to build the dependent package first. So for the same example, if we want to build `@rccl/guest-account` we first need to build `@rccl/folio` in order to work.

As comment, for development we will probably need to run build for the different packages we want to develop for, this can be done with the following command

`yarn build [package folder] --watch` or `npm run build [package folder]` as example `yarn build folio --watch`.

## Publishing packages

Once a package is built, we will probably want to publish it to the npm registry, in the case the one running in `localhost` using docker. For the sake of the POC, we will need to set up the registry we want to target, a file called `.npmrc` was added to each of the layers "repositories" containing that configuration.

Since we need to publish the `dist` folders the `.npmrc` file will not be taken in mind when publishing from it, so... for publishing a package we will do the following steps

1.  Run `npm adduser --registry http://localhost:4873` in order to login before publishing.
2.  Run `yarn build [package folder]` or `npm run build [package folder]` to build the package.
3.  Copy `.npmrc` to `dist/libs/[package folder]` to start pointing the private registry before publishing.
4.  Run `cd dist/libs/[package folder]`.
5.  **(optional but recommended to be safe)** `npm config get registry` to check if the `.npmrc` file was taken in mind. This should output `http://localhost:4873`.
6.  `npm publish` to publish the package to the private registry.

## Linking packages

For development purposes, `npm link` or `yarn link` will be used. What it does is basically replacing the `node_modules` installation for the package with a linked instance referencing another repository trough global `node_modules`.

The workflow we will have is

1.  Link the `dist` folder for the package you want to link with `yarn link` or `npm link` in the dist folder for that package.
2.  In the integration app run `yarn link [package name]` or `npm link [package name]`. As example `yarn link @rccl/logging` to link the `@rccl/logging` package.
3.  Run the app with `ng serve` in the `app-repo` layer "repository".

With linking when a change is done to a linked package live reload should be triggered.

## POC Setup

In order to test the POC, these are the steps to follow

1.  Create the `admin` user, for the npm registry, as explained above.
2.  Run the dockerized npm registry with the command mentioned above.
3.  Proceed and publish version `0.0.1` of the `@rccl/logging` package inside `libs-repo` folder.
4.  Proceed and publish version `0.0.1` of `@rccl/folio` `@rccl/guest-account` and `@rccl/cruise-bookings` packages in the specified order, all inside the `features-repo` folder. Have in mind installing `@rccl/logging` might be needed.
5.  Proceed to the `app-repo` folder and install the packages needed.
6.  Run the app with `ng serve`.

To link and develop changes in a package, for this example we will do it in `@rccl/logging` before #6 do the following.

1.  Go to `libs-repo` and link the `@rccl/logging` package.
2.  In a command window execute a watcher to build the package on file change. Explained in building packages.
3.  Go to `app-repo` and link the linked `@rccl/logging` package.
4.  Run the application with `ng serve`.
5.  Do the needed changes in the `@rccl/logging` package. Live reload should be triggered on change.

## Pending points to review

I did not reviewed the process in order to define the `peerDependencies` of the different packages but it should be as easy as adding them to the respectevly `package.json` files.
