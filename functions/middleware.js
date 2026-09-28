export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Mobile devices ko pehchanein
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // Agar user DESKTOP se hai, to use raste se hi Google par bhej dein
  if (!isMobile) {
    return Response.redirect("https://www.google.com", 302);
  }

  // Agar user MOBILE se hai, to use aapki asli pages.dev site dikhayein
  return next();
}
