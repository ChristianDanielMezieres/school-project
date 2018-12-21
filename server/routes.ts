import * as express from 'express';

import CatController from './controllers/CatController';
import MentorController from './controllers/MentorController';
import StudentController from './controllers/StudentController';
import TarifController from './controllers/TarifController';
import EmailController from './controllers/EmailController';
import AdmincardController from './controllers/AdmincardController';
import UserController from './controllers/UserController';
import UploadController from './controllers/UploadController';
// import cat from './models/cat';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const cat = new CatController();
  const student = new StudentController();
  const mentor = new MentorController();
  const tarif = new TarifController();
  const email = new EmailController();
  const admincard = new AdmincardController();
  const upload = new UploadController();
  const user = new UserController();

  // cats
  router.route('/cats').get(cat.getAll);
  router.route('/cats/count').get(cat.count);
  router.route('/cat').post(cat.insert);
  router.route('/cat/:id').get(cat.get);
  router.route('/cat/:id').put(cat.update);
  router.route('/cat/:id').delete(cat.delete);
  // tarifs
  router.route('/tarifs').get(tarif.getAll);
  router.route('/tarifs/count').get(tarif.count);
  router.route('/tarif').post(tarif.insert);
  router.route('/tarif/:id').get(tarif.get);
  router.route('/tarif/:id').put(tarif.update);
  router.route('/tarif/:id').delete(tarif.delete);
  // emails
  router.route('/emails').get(email.getAll);
  router.route('/emails/count').get(email.count);
  router.route('/email').post(email.insert);
  router.route('/email/:id').get(email.get);
  router.route('/email/:id').put(email.update);
  router.route('/email/:id').delete(email.delete);

  // mentors
  router.route('/mentors').get(mentor.getAll);
  router.route('/mentors/count').get(mentor.count);
  router.route('/mentor').post(mentor.insert);
  router.route('/mentor/:id').get(mentor.get);
  router.route('/mentor/:id').put(mentor.update);
  router.route('/mentor/:id').delete(mentor.delete);

  // students
  router.route('/students').get(student.getAll);
  router.route('/students/count').get(student.count);
  router.route('/student').post(student.insert);
  router.route('/student/:id').get(student.get);
  router.route('/student/:id').put(student.update);
  router.route('/student/:id').delete(student.delete);

  // upload
  router.route('/upload').post(upload.upload);
  router.route('/file/:filename').get(upload.getFile);

  // admincards
  router.route('/admincards').get(admincard.getAll);
  router.route('/admincards/count').get(admincard.count);
  router.route('/admincard').post(admincard.insert);
  router.route('/admincard/:id').get(admincard.get);
  router.route('/admincard/:id').put(admincard.update);
  router.route('/admincard/:id').delete(admincard.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
