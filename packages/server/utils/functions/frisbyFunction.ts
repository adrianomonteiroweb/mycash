module.exports = async function frisbyFunction(
  method: string,
  frisby: any,
  baseURL: string | undefined,
  alias: string,
  status: number,
  id: number | '' = ''
) {
  const result = await frisby[method](`${baseURL}/${alias}/${id}`)
    .expect('status', status)
    .then((response: any) => {
      const { body } = response;

      return JSON.parse(body);
    });

  return result;
};
