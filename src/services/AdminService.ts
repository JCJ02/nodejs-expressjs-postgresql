import AdminRepository from "../repositories/AdminRepository";

class AdminService {
    private adminRepository;

    constructor() {
        this.adminRepository = new AdminRepository();
    }
}

export default AdminService;