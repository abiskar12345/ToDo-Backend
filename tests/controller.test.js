const TodoServices = require("../services/TodoServices");
const TodoController = require("../controller/TodoController");

jest.mock("../services/TodoServices");

describe("Todo Controller", () => {
  const mockReq = {
    body: {
      name: "Complete assignment",
      date: "2023-12-13",
    },
    params: {
      id: 1,
    },
  };
  const mockRes = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };
  const mockData = {
    _id: 1,
    name: "Complete assignment",
    date: "2023-12-13",
  };
  test("should add todo", async () => {
    TodoServices.get.mockResolvedValue(mockData);

    await TodoController.getTodoList(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: "success",
      data: mockData,
    });
  });

  test("should create a todo", async () => {
    TodoServices.create.mockResolvedValue(mockData);
    await TodoController.add(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: "success",
      data: { _id: 1, date: "2023-12-13", name: "Complete assignment" },
    });
  });
  test("should update Todo", async () => {
    TodoServices.update.mockResolvedValue(mockData);
    await TodoController.update(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: "success",
      data: { _id: 1, date: "2023-12-13", name: "Complete assignment" },
    });
  });
  test("should delete Todo", async () => {
    TodoServices.remove.mockResolvedValue({});
    await TodoController.remove(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: "success",
      data: {},
    });
  });
  test("should get Todo by  id", async () => {
    TodoServices.getById.mockResolvedValue(mockData);
    await TodoController.getById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: "success",
      data: { _id: 1, date: "2023-12-13", name: "Complete assignment" },
    });
  });
});
