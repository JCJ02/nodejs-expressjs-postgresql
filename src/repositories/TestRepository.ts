class TestRepository {

    // TEST
    async test(data: { message: string }) {

        data.message = 'Hello World!';

        return data;
    }
}

export default TestRepository;