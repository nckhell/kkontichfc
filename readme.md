Needs to run on node v10.

## Development

```
npm run dev
```

## Deployement

```
npm run deploy
```

## Build content files

This is done automatically when running `npm run dev` and `npm run deploy`.

### Build news content

Process all markdown files `content/nieuws/**/**/*.md` and create summary json that can be used in the static app

```
npm run build:content:news
```

### Build events content

Process all markdown files `content/evenementen/**/*.md` and create summary json that can be used in the static app

```
npm run build:content:events
```

### Build wedstrijdverslagen content

Process all markdown files `content/wedstrijdverslagen/2019-2020/heren/1e-provinciale/*.md` and create summary json that can be used in the static app

```
npm run build:content:wedstrijdverslagen
```

### Build pages content

Process all markdown files `content/pages/**/*.md` and create summary json that can be used in the static app. Routes are also automatically created for every page according to the directory structure.

```
npm run build:content:pages
```

### Run all build commands

Run all of the above build commands

```
npm run build:content
```
