import type { Preview } from "@storybook/react"

import { Global, ThemeProvider, css } from "@emotion/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import React from "react"

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

const GlobalStyles = () => <Global styles={css``} />

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // withThemeFromJSXProvider({
    //   Provider: ThemeProvider,
    //   GlobalStyles,
    // }),
  ],
}

export default preview
