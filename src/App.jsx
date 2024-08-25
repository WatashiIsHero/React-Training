export const App = (props) => {
  //const { color, message } = props;
  const messageText = props.children || props.message;

  const textStyle = {
    color: props.color,
  };

  return (
    <>
      <p style={textStyle}>{messageText}</p>
    </>
  );
};
