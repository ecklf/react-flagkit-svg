function template(
  {template},
  opts,
  {imports, componentName, props, jsx, exports},
) {
  return template.ast`
    ${imports}
    import PropTypes from "prop-types";
    const ${componentName} = ({size, width, height, ...otherProps}) => {

      if (size !== height) {
        width = width * (size / height);
        height = height * (size / height);
      }
      return (
        ${jsx}
      )
    }

    ${componentName}.propTypes = {
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    ${componentName}.defaultProps = {
      size: "15",
      width: "21",
      height: "15",
    };

    ${exports}
  `;
}
module.exports = template;
