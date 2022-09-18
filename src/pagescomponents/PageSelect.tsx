const PageSelect = () => {
  function redirect() {
    window.location.href = "https://google.com";
    console.log(window.location);
  }
  return (
    <div>
      <h1>This is page select</h1>
      <a href="/character">Character link</a>
      <button onClick={() => redirect}>Pres Me</button>
    </div>
  );
};

export default PageSelect;
