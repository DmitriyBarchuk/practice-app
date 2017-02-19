var Comments = React.createClass({
  render: function() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего.
      </div>
    );
  }
});

var News = React.createClass({
  render: function() {
    return (
      <div className="news">
        Я компонент News и иногда я могу отображать новости, если они есть.
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Что то выводим! Что то рендерим.
        <News />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
