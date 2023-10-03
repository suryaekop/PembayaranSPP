/**
 * @param {string} endpoint 
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} method 
 * @param {JSON | FormData} data 
 * @returns 
 */
const httpClient = async(endpoint, method, data =  null) => {
    const baseUrl = "https://vbragjrcmqiorydcblvt.supabase.co"
  
    const headers = {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZicmFnanJjbXFpb3J5ZGNibHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODc0MTAsImV4cCI6MjAxMDk2MzQxMH0.fEV8q2eu-0UvrlOoG3KDCi8yaTXQAlhkoWOPTco1Uv0",
    }
    if (method === "POST" || method === "PATCH") {
      headers.Prefer = "return=representation"
      headers["Content-Type"] = "application/json"
    }
  
    if (data) {
      return await fetch(baseUrl + endpoint, {
        method,
        headers,
        body: JSON.stringify(data)
      })
    }
  
    return await fetch(baseUrl + endpoint, {
      method,
      headers
    })
  }
  
  export default httpClient