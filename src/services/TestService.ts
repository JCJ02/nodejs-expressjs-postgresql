import TestRepository from "../repositories/TestRepository";

class TestService {

    private testRepository;

    constructor() {
        this.testRepository = new TestRepository();
    }

    // TEST
    async test(data: { message: string }) {

        if (!data) {
            return null;
        }

        return await this.testRepository.test(data);
    }

}

export default TestService;