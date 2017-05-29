import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { ChatBotListService } from './chatbot-list.service';

export function main() {
  describe('NameList Service', () => {
    let nameListService: ChatBotListService;
    let mockBackend: MockBackend;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [
          ChatBotListService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(ChatBotListService).get()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of names when get called', async(() => {
      let nameListService = TestBed.get(ChatBotListService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
      });

      nameListService.get().subscribe((data: any) => {
        expect(data).toEqual(['Dijkstra', 'Hopper']);
      });
    }));
  });
}