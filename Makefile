PREFIX ?= /usr/local
MANPREFIX ?= "$(PREFIX)/share/man/man1"
SCRIPTS = $(wildcard bin/git-*)
MAN_PAGES = $(wildcard man/git-*.1)
CMD_FMT=\x1b[01m
RST_FMT=\x1b[0m

.PHONY: install uninstall

install:
	@mkdir -p $(DESTDIR)$(MANPREFIX)
	@mkdir -p $(DESTDIR)$(PREFIX)/bin
	@mkdir -p $(DESTDIR)$(PREFIX)/git-p4-extras/bin
	@$(foreach BIN, $(SCRIPTS), \
		echo "Installing `basename $(BIN)` -> $(DESTDIR)$(PREFIX)/git-p4-extras/bin"; \
		cp -f $(BIN) $(DESTDIR)$(PREFIX)/git-p4-extras/$(BIN); \
	)
	@$(foreach MAN, $(MAN_PAGES), \
		echo "Installing `basename $(MAN)` -> $(DESTDIR)$(MANPREFIX)"; \
		cp -f $(MAN) $(DESTDIR)$(MANPREFIX)/`basename $(MAN)`; \
	)
	ln -s ../git-p4-extras/bin/git-p4-wrapper $(DESTDIR)$(PREFIX)/bin/git-p4-wrapper
	@echo
	@echo "Congratulation!! Install finished"
	@echo "Please add alias to your shell profile, eg. ~/.profile"
	@echo
	@echo "For example:"
	@echo "$(CMD_FMT)echo 'alias git=git-p4-wrapper' >> ~/.profile$(RST_FMT)"
	@echo 

uninstall:
	@$(foreach BIN, $(SCRIPTS), \
		echo "Removing $(DESTDIR)$(PREFIX)/git-p4-extras/$(BIN)"; \
		rm -f $(DESTDIR)$(PREFIX)/git-p4-extras/$(BIN); \
	)
	@$(foreach MAN, $(MAN_PAGES), \
		echo "Removing $(DESTDIR)$(MANPREFIX)/$(MAN)"; \
		rm -f $(DESTDIR)$(MANPREFIX)/`basename $(MAN)`; \
	)
	@rm -rf $(DESTDIR)$(PREFIX)/git-p4-extras
	@rm -f $(DESTDIR)$(PREFIX)/bin/git-p4-wrapper
