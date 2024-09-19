export default class AppController {
  static getHomepage(_, res) {
    res.set('Content-Type', 'text/plain');
    res.status(200).send('Hello Holberton School!');
  }
}
