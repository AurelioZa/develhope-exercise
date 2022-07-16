const supertest = require("supertest");

const createApp = require("./app");

const app = createApp();

const request = supertest(app);

test("GET /", async () =>{
    const response = await request.get("/")
        .expect(200)
        //.expect("Content-Type", "application/json")
        .expect("Content-Type", "text/html")


    //expect(response.body).toEqual({location: "MARTE"})
    expect(response.text).toEqual("Welcome to the World Wide Web!");

})