Тут должны лежать только фичи

например функция, которая открывает/закрывает меню
или функция, которая делает запрос к серверу что бы получить данные юзера

фичи могут быть клиентскими (которые выполняются непосредственно браузером)
и серверные (которые выполняются сервером Next)
пример серверной фичи: функция, которая будет получать файл локализации для нужного языка и передавать переводы компоненту страницы


фичи МОГУТ импортировать в себя: 
  entity (где будут константы и типизация), 
  shared(этого уровня у тебя скорее всего не будет)

виджеты НЕ МОГУТ импортировать:
  другие фичи,
  виджеты,
  страницы (_pages)
  приложения (app)