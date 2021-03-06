// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HeadComponents = [
  <script key="clarity-script" src="./src/assets/track.js" />,
  <meta name="msvalidate.01" content="D197CE78F4A37DCCF3003A409D913EA1" />
]

exports.onRenderBody = ({
  setHeadComponents,
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
}