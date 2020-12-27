const hour = () => `${new Date().getHours()}:${
  new Date().getMinutes().toLocaleString().length === 1
    ? `0${new Date().getMinutes()}`
    : new Date().getMinutes()
}:${
  new Date().getSeconds().toLocaleString().length === 1
    ? `0${new Date().getSeconds()}`
    : new Date().getSeconds()
}`;

export default hour;
