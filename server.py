from curses.ascii import HT
import http.server
import socketserver

class HttpReqHander(http.server.SimpleHTTPRequestHandler):
  def end_headers(self) -> None:
    self.send_headers()
    http.server.SimpleHTTPRequestHandler.end_headers(self)

  def send_headers(self) -> None:
    self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
    self.send_header("Pragma", "no-cache")
    self.send_header("Expires", "0")

if __name__ == '__main__':
  with socketserver.TCPServer(("", 8000), HttpReqHander) as httpd:
    print("Listening on port 8000...")
    httpd.serve_forever()