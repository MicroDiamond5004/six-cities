function ErrorScreen() : JSX.Element {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Error 404</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Страница не найдена!</b>
            <p className="favorites__status-description">Вернуться на главную страницу - <a className="locations__item-link tabs__item" href="/">Нажмите сюда</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ErrorScreen;
