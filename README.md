# Text Exapnder React Component

The **Text Expander** is a small React component that allows you to display a given text with customizable options. It provides a user-friendly way to show a limited number of words and toggle between displaying the full text and the truncated version. Additionally, you can apply custom CSS styles to the component by passing a class name.

## Features

- Display a given text with a specified number of words.
- Toggle between displaying the full text and the truncated version.
- Customize the text for "Show More" and "Show Less" buttons.
- Change the colors for these buttons.
- Apply custom CSS styles by passing a class name.

## Props

The TextExpander component accepts the following props:

<TextExpander
collapsedNumWords = 10,
expandButtonText = "Show More",
collapseButtonText = "Show Less",
buttonColor = "#1f09cd",
expanded = false,
className = "">Your Text</TextExpander>

- children (required): The text to be displayed.
- collapsedNumWords (optional): The maximum number of words to display before truncating the text. Default: 10.
- expandButtonText (optional): The text to display on the "Show More" button. Default: "Show More".
- collapseButtonText (optional): The text to display on the "Show Less" button. Default: "Show Less".
- buttonColor (optional): The color to be applied on the above buttons. Default: #1f09cd.
- expanded (optional): If "true" complete text will be displayed. Default: false
- className (optional): The custom CSS class name to be applied to the component for styling.

## Contributions

Contributions to the Text Expander React component are welcome! If you encounter any issues, have suggestions for improvements, or would like to add new features, please feel free to open an issue or submit a pull request on the GitHub repository: https://github.com/AraibKhan/text-expander.git
