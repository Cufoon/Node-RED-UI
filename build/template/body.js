"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBody = void 0;
const generateBody = () => `
const AppElement = () => {
  return <><div>This is home page.</div><Outlet /></>;
};

const PageElementA = () => {
  return <div>This is A page.</div>;
};

const PageElementB = () => {
  return <div>This is B page.</div>;
};

const PageElementC = () => {
  return <div>This is C page.</div>;
};
`;
exports.generateBody = generateBody;
