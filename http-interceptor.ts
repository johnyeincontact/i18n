import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpY0JVSWQiOjU3MjM2LCJuYW1lIjoiankxQGhjNi5jb20iLCJpc3MiOiJodHRwczovL2FwaS5pbmNvbnRhY3QuY29tIiwic3ViIjoidXNlcjo4MDY2IiwiYXVkIjoiaW5Db250YWN0IFN0dWRpb0BpbkNvbnRhY3QgSW5jLiIsImV4cCI6MTU0NjQ1ODI0NywiaWF0IjoxNTQ2NDU0NjQ3LCJpY1Njb3BlIjoiMSwyLDQsNSw3LDgiLCJpY0NsdXN0ZXJJZCI6IkhDNiIsImljQWdlbnRJZCI6ODA2NiwiaWNTUElkIjo0LCJuYmYiOjE1NDY0NTQ2NDd9.IeJXwawSnX3w2BmGKzDvNb8tL8WdFwHdkqy5e_8nGGBrC7SnH75ah6ych_3N-altiHD0ddWZoh1lwHrmz5zFkJ_6wLs1F94xntxTjSLtKtHPNLMc0_DUqVlOuzEAVr-UzNaiN7rFQLiKgXW_o2QHC6kxMPQhMtx2NboVATwDjmLwk6XRljK0v-ZYw65P44pHDKbaNDiKBDsZvmcR1ZPnQgI8w1mi-AcDCvtPUD2G4oLjyVSr1-ilGNgdLpCSCBF4On77gVGs927v7bpTR677ml_zaT837g9H-7aBxBZ5z8iyd20ld_tmQGqaXrQfjwCv4A8qRmpSdFOauPQG6nr59Q';
    
    if(token) {
      const newReq = req.clone(
        { 
           headers: req.headers.set('Authorization',
                    'Bearer ' + token)
        });

        return next.handle(newReq);
    }
    else {
      return next.handle(req);
    }
  }
};

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: HttpRequestInterceptor, 
      multi: true }
  ]
})  
export class HttpInterceptorModule { }