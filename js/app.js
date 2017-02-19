var viewd_news = [
  {
    author: 'Dmitriy Barchuk',
    preview_text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Alex Barchuk',
    preview_text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Ghost',
    preview_text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

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
    var last_news = this.props.last_news;
    var newsShablon = last_news.map(function(item, id){
        return (
          <div key={id}>
            <p className="news_author">{item.author}:</p>
            <p className="news_preview_text">{item.preview_text}</p>
          </div>
        )
    })

    return (
      <div className="news">
      {newsShablon}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Что то выводим! Что то рендерим.
        <News last_news={viewd_news} /> {/*коммент*/}
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
