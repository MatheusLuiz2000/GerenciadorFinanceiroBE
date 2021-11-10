import { Request, Response } from 'express';
import path from 'path';
import CNPJService from '../services/CNPJService';

class CNPJController {
  docs = (req, res) => {
    res.sendFile(path.resolve('./apidoc/index.html'));
  };

  search = async (req, res) => {
    const { cnpj } = req.params;

    const { status, data } = await CNPJService.search(cnpj, false);

    return res.status(status).json(data);
  };

  update = async (req, res) => {
    const { cnpj } = req.params;

    const { status, data } = await CNPJService.search(cnpj, true);

    return res.status(status).json(data);
  };

  delete = async (req, res) => {
    const { cnpj } = req.params;

    const { status, data } = await CNPJService.delete(cnpj);

    return res.status(status).json(data);
  };
}

export default new CNPJController();
