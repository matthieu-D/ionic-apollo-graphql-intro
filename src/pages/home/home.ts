import { Component } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import gql from 'graphql-tag';

const Users = gql`
  query {
    users{
      id
      name
    }
  }
`;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: ApolloQueryObservable<any>;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.data = this.apollo.watchQuery({ query: Users });
  }
}
