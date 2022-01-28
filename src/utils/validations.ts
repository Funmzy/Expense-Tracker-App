import Joi from 'joi'
import {IUser, IBudget, ILogin} from './interfaces'


export const validateSignup = (user: IUser) => {
    const schema = Joi.object({
      firstName: Joi.string().min(2).max(20).required(),
      lastName: Joi.string().min(2).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(16).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    return schema.validate(user);
  };


  export const validateLogin = (user: ILogin) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(16).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });
    return schema.validate(user);
  };

  export const validateBudget = (user: IBudget) => {
    const schema = Joi.object({
      date: Joi.date().required(),
      budget: Joi.number().required(),
      userId: Joi.string().required(),
      items: Joi.array().required()
    });
    return schema.validate(user);
  };