import productList from "../inventory/productList";

const customers = [
  { firstName: "Rohan", lastName: "Sharma", position: "Manager", mobile: "+91 9876543210" },
  { firstName: "Aditi", lastName: "Verma", position: "CEO", mobile: "+91 8765432109" },
  { firstName: "Suresh", lastName: "Patel", position: "Sales Head", mobile: "+91 7654321098" },
  { firstName: "Neha", lastName: "Goyal", position: "CTO", mobile: "+91 6543210987" },
  { firstName: "Raj", lastName: "Mehta", position: "Analyst", mobile: "+91 5432109876" },
  { firstName: "Simran", lastName: "Kaur", position: "Developer", mobile: "+91 4321098765" },
  { firstName: "Vikas", lastName: "Joshi", position: "Designer", mobile: "+91 3210987654" },
  { firstName: "Priya", lastName: "Nair", position: "HR", mobile: "+91 2109876543" },
  { firstName: "Amit", lastName: "Bose", position: "Marketer", mobile: "+91 1098765432" },
  { firstName: "Kavita", lastName: "Deshmukh", position: "Consultant", mobile: "+91 9876543201" },
  { firstName: "Rakesh", lastName: "Yadav", position: "Support", mobile: "+91 8765432190" },
  { firstName: "Deepika", lastName: "Malhotra", position: "Engineer", mobile: "+91 7654321980" },
  { firstName: "Manoj", lastName: "Rana", position: "Supervisor", mobile: "+91 6543219870" },
  { firstName: "Anjali", lastName: "Kapoor", position: "Coordinator", mobile: "+91 5432198760" },
  { firstName: "Vinod", lastName: "Saxena", position: "Executive", mobile: "+91 4321987650" },
  { firstName: "Meena", lastName: "Pillai", position: "Strategist", mobile: "+91 3219876540" },
  { firstName: "Arun", lastName: "Chowdhury", position: "Lead", mobile: "+91 2198765430" },
  { firstName: "Sunita", lastName: "Bajaj", position: "Advisor", mobile: "+91 1097654321" },
  { firstName: "Gopal", lastName: "Tiwari", position: "Planner", mobile: "+91 9876504321" },
];

const orders = customers.map((customer, index) => ({
  id: index + 1,
  products: [
    { quantity: 5, product: productList[index % productList.length] },
    { quantity: 5, product: productList[1] },
    { quantity: 5, product: productList[2] },
  ],
  customer: customer,
}));

  export default orders;