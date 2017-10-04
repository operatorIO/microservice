module.exports = {
  async formatReponse(data = null, status = 200) {
    return {
      success: true,
      status: status,
      data: data
    };
  }
}