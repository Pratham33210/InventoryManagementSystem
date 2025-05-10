import productList from "../inventory/productList";

const customers = [
    { id: 1, firstName: "Rohan", lastName: "Sharma", position: "Manager", mobile: "+91 9876543210", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 2, firstName: "Aditi", lastName: "Verma", position: "CEO", mobile: "+91 8765432109", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 3, firstName: "Suresh", lastName: "Patel", position: "Sales Head", mobile: "+91 7654321098", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 4, firstName: "Neha", lastName: "Goyal", position: "CTO", mobile: "+91 6543210987", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 5, firstName: "Raj", lastName: "Mehta", position: "Analyst", mobile: "+91 5432109876", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 6, firstName: "Simran", lastName: "Kaur", position: "Developer", mobile: "+91 4321098765", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 7, firstName: "Vikas", lastName: "Joshi", position: "Designer", mobile: "+91 3210987654", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 8, firstName: "Priya", lastName: "Nair", position: "HR", mobile: "+91 2109876543", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },{ id: 9, firstName: "Amit", lastName: "Bose", position: "Finance Manager", mobile: "+91 9988776655", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] },
    { id: 10, firstName: "Kavita", lastName: "Deshmukh", position: "Marketing Head", mobile: "+91 8877665544", orders: [{ id: 1, products: [{ quantity: 5, product: productList[0] }, { quantity: 5, product: productList[1] }, { quantity: 5, product: productList[2] }] }] }

  ];
  
export default customers;