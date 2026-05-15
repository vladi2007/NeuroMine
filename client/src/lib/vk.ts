
import bridge from "@vkontakte/vk-bridge";
const encodeBase64 = (obj: unknown) => {
  const jsonString = JSON.stringify(obj);
  return btoa(unescape(encodeURIComponent(jsonString)));
};

export async function getLaunchParams() {
  const data = await bridge.send(
    "VKWebAppGetLaunchParams"
  );

  return encodeBase64(data);
}