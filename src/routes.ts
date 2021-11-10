// eslint-disable-next-line no-unused-vars
import express, { Router } from 'express';
import CNPJController from './app/controllers/CNPJController';
import CNPJValidator from './app/validators/CNPJValidator';

const routes = new Router();

routes.get('/health', (req, res) => {
  return res.json({ ok: 'teste13' });
});

routes.get('/:cnpj', CNPJValidator.search, CNPJController.search);
routes.patch('/:cnpj', CNPJValidator.search, CNPJController.update);
routes.delete('/:cnpj', CNPJValidator.search, CNPJController.delete);

export default routes;
