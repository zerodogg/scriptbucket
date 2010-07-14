This is a quick *hack* to get syntax hilighting for Mason working again
in later versions of vim. It is far from a proper fix.

Installation (with pathogen):
    mkdir -p  ~/.vim/bundle/vim-mason/syntax/
    cd ~/.vim/bundle/vim-mason/syntax
	wget http://github.com/zerodogg/scriptbucket/raw/master/trivial/vim-mason/mason.vim http://github.com/zerodogg/scriptbucket/raw/master/trivial/vim-mason/oldperl.vim

Installation (without pathogen):
    mkdir -p  ~/.vim/syntax/
    cd ~/.vim/syntax
	wget http://github.com/zerodogg/scriptbucket/raw/master/trivial/vim-mason/mason.vim http://github.com/zerodogg/scriptbucket/raw/master/trivial/vim-mason/oldperl.vim

I take no credit for the scripts themselves, I just quickly hacked them
to work again.

Simply put, the mason.vim file doesn't handle the new and improved perl
syntax file. So this is mason.vim bundled with the old syntax file. The
old syntax file will only be loaded along with mason, so it won't break
anything.
