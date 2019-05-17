//Importando la libreria node-telegram-bot-api
const TelegramBot = require('node-telegram-bot-api');
// Creando nuestra variable que almacenara nuestro token para autenticarnos con el bot creado con BotFather
const token = 'AQUI VA EL TOKEN';
// A continuacion, creamos nuestro bot y configuramos el parametro polling igualandolo a True, Con esto logramos que el bot esté en constante proceso de escucha y procesamiento de datos respecto al token de la API de Telegram.
const bot = new TelegramBot(token, { polling: true });
// A partir de estas tres líneas de código, ya podríamos empezar a crear comandos y eventos para darle funcionalidad a nuestro bot.


//Declaramos la funcion
bot.onText(/^\/start/, (msg) => {
  // Imprimimos en consola el mensaje recibido.
  console.log(msg);
  // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
  let chatId = msg.chat.id;
  // msg.from.username se encarga de recoger el @alias del usuario.
  let username = msg.from.username;
  // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
  bot.sendMessage(chatId, "Hola, " + username + " soy un bot y mi nombre es Harry");
});


//Declaramos la funcion indicando que el evento esperado sera un "message"
bot.on('message', (msg) => {
  console.log(msg);
  // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
  let chatId = msg.chat.id;

  let textodelUsuario = msg.text;
  console.log("Este es el mensaje del usuario:: ", textodelUsuario);
  /*----
  Aqui podemos colocar algo de Inteligencia Artifical, alguna función o algo en lo particular :-)
  ----*/
  // Enviamos nuestro mensaje indicando el id del chat.
  bot.sendMessage(chatId, `Se ha recibido el mensaje, tu has dicho: ${textodelUsuario}`);
});
