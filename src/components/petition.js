import React from 'react';
import {connect} from 'react-redux';

import {ThanksLoader} from '../loaders/petition.js';
import SignatureAddForm from './signature-add-form.js';
import SignatureCount from './signature-count.js';

class Petition extends React.Component {
  componentDidMount () {
    //TODO: lazy-load signature data here
    //lazy-load thanks page component
    ThanksLoader();
  }

  text2paras (str) {
    return str.split(/\n+/);
  }

  render () {
    let p = this.props.petition;

    return (
        <div className="container background-moveon-white" role="main">
          <div className="row row-fluid">
            <SignatureAddForm petition={this.props.petition} text2paras={this.text2paras} />
            <div className="span8 pull-right petition-info-top">
              <div className="form-wrapper responsive">
                <div className="petition-top hidden-phone">
                  <h1 id="petition-title" className="moveon-bright-red big-title">{p.title}</h1>
                </div>

                <div id="pet-statement-box" className="lh-36 blockquote hidden-phone">
                  <h3 className="visible-phone moveon-bright-red">Petition Statement</h3>
                  <div id="pet-statement">{this.text2paras(p.summary).map(
                    (para, i) =>
                    <p key="statement_p{i}">{para}</p>
                    )}
                  </div>
                </div>
                <SignatureCount current={p.signatureCount} goal={p.signatureGoal} />
              </div>

              <div className="petition-top">
                <p id="to-target" className="lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer">To be delivered to <span className="all-targets"><strong>
                      {p.target.map((t) => t.name).join(', ')}
                </strong></span></p>
                <p id="by" className="byline lh-20">Petition by <a href="/contact_creator.html?petition_id=95935" className="underline">{p.contact_name}</a></p>
              </div>

              <div className="clear"></div>

              <div id="pet-explain" className="background-moveon-white bump-top-1">
                <div className="widget">
                  <div className="widget-top">
                    <h3 onClick={() => this.props.fooBar()} className="moveon-bright-red">Petition Background</h3>
                  </div>
                  <div dangerouslySetInnerHTML={{__html: p.description}}></div>
                </div>

                <div className="widget">
                  <div className="widget-top">
                    <h3 className="moveon-bright-red">Current petition signers</h3>
                  </div>
                  <div id="pet-signers-loading" className="bump-top-1"><b>Loading...</b></div>

                  <div>
                    <div id="pet-signers" className="bump-top-1">
                    </div>
                    <form id="flag-comment-form" action="/flag_comment.html" method="POST">
                      <input id="flag-comment-user-id" type="hidden" name="user_id" value=""/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Petition.propTypes = {
  petition: React.PropTypes.object.isRequired
};

function mapStateToProps (store, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Petition);
