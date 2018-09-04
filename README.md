# standup cli :coffee:

A CLI for your daily stand-up post!

## Installation

```sh
npm i -g standup-cli
```

## Usage

It comes pre-configured with a default template that looks like this:
  ```
  *1. What did you do yesterday?*
  - * phew*  a lot of stuff!
  *2. What will you do today?*
  This module :)
  *3. Are there any impediments in your way?*
  None
  ```

You can go with that:

  ```sh
  standup
  // Starts prompting you with questions
  ```

Or specify your own template [using a config file like this](https://github.com/thiagodelgado111/standup-cli/blob/master/src/default.json), passing it as an argument:


  ```sh
  standup ~/standup-template.json
  // Starts prompting you with questions as you defined at the config file
  ```

## Contribute

Please feel free to file an issue, send your PR or just say "hi 👋 "!

## License

MIT © 2018 Thiago Delgado
