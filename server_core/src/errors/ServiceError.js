class ServiceError extends Error {
    constructor(message, status = 500) {
      super(message);
      this.name = "ServiceError";
      this.status = status;
    }
  }
  
  export default ServiceError;
  