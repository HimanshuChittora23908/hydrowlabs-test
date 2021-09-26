import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Logo from "./img/Logo.svg";
import info from "./img/info.svg"
import arrow from "./img/arrow.svg";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Login = () => {
const [ name_user , setName_user ] = useState('');
const [ designation , setDesignation ] = useState('');
const [lang , setLang] = useState('English');

const moveToNext = () => {
    if(result1.error || result2.error){
        alert('Please fill all the fields correctly !!!');
    }
    else{
const details = [
    {
        name: name_user,
        designation: designation,
        lang: lang
    }
]
localStorage.setItem('details', JSON.stringify(details));
window.location.href = "./details";
}
}

const Joi = require('joi');

var schema1 = Joi.object().keys({
  name: Joi.string().alphanum().min(5).max(32).required(),
});

var schema2 = Joi.object().keys({
  designation: Joi.string().alphanum().min(2).max(64).required(),
});

const dataToValidate1 = {
  name : name_user
}

const dataToValidate2 = {
  designation : designation
}

const result1 = schema1.validate(dataToValidate1);
const result2 = schema2.validate(dataToValidate2);

const language = [
  {
    value: "English",
  },
  {
    value: "Hindi",
  },
  {
    value: "Marathi",
  },
  {
    value: "Bengali",
  }
]

return (
  <div className="bg-blue-100 md:h-screen flex my-auto">
    <div className="block mx-auto my-24 md:m-auto xl:m-auto w-11/12 px-4 md:w-1/2 xl:w-1/4 md:px-8 xl:px-8 bg-white border-2 border-gray-200 py-10 rounded-3xl">
    <img src={Logo} alt="logo" className="block mx-auto w-2/3 mb-12" />
   <Formik
      initialValues={{
        name : "",
        designation: "",
      }}
      onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}
    >
      {({values, isSubmitting}) => (
        <Form>
          <label htmlFor="name" className="text-form-label xl:text-xl font-semibold">Name<sup className="text-red-500 font-bold">*</sup></label><br/>
          {result1.error ? result1.error.details.map(error => (
            <div key={error.path} className="text-2xs xl:text-xs text-error flex gap-1 h-3 float-right items-center xl:-mt-1"><img src={info} alt="info" />{error.message.slice(7)}</div>
          )) : ''}
          <Field type="input" handleChange={setName_user(values.name)} value={name_user} name="name" placeholder="Enter full name" className="border-2 placeholder-error border-error py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full mb-6" />
         <br />
          <label htmlFor="designation" className="text-form-label xl:text-xl font-semibold">Designation<sup className="text-red-500 font-bold">*</sup></label><br/>
          {result2.error ? result2.error.details.map(error => (
            <div key={error.path} className="text-2xs xl:text-xs text-error flex gap-1 h-3 float-right items-center xl:-mt-1"><img src={info} alt="info" />{error.message.slice(14)}</div>
          )) : ''}
          <Field type="input" handleChange={setDesignation(values.designation)} value={designation} name="designation" placeholder="Enter Position" className="border-2 placeholder-error border-error py-2 xl:py-3 px-4 text-xs xl:text-sm rounded-full mt-1 w-full mb-6" />
         <br />
         <label htmlFor="language" className="text-form-label xl:text-xl font-semibold">Language</label><br />
         <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button className="flex border-2 border-error w-full text-error px-4 py-2 xl:py-3 rounded-full text-xs xl:text-sm mt-2">{lang}<ChevronDownIcon className="xl:-mr-1 ml-2 h-4 w-4 xl:h-5 xl:w-5" aria-hidden="true" /></Menu.Button>
      </div>
      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-xl px-8 shadow-xl bg-white ring-1 ring-black ring-opacity-10 divide-y-2 divide-gray-200 focus:outline-none">
        {language.map(({ value }) => (
          <div className="xl:py-1">
            <Menu.Item>{({ active }) => (
                <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block py-2 text-xs xl:text-sm')} onClick={() => setLang(value)}>{value}</a>
                )}
            </Menu.Item>
          </div>
          ))}
          </Menu.Items>
          </Transition>
          </Menu>
          <br />
          <button disabled={isSubmitting} onClick={moveToNext} type="submit" className="flex items-center gap-2 justify-center bg-form-label py-2 xl:py-2 w-2/5 xl:w-1/2 text-white font-semibold rounded-full mx-auto mb-12 text-sm xl:text-base">Login <img src={arrow} alt="arrow" className="h-2 items-center xl:h-3" /></button>
        </Form>
      )}
    </Formik>
    <div className="flex gap-2 justify-center text-xs xl:text-base mt-4 font-light text-gray-600">Powered By <img src={Logo} alt="logo" className="h-4 xl:h-6" /></div>
    </div>
    </div>
);
};

export default Login;