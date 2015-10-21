export = class TsModule {
    getDefaultProps(): any {
        return {
            text: 'boop'
        };
    }

    getText(): string {
        if (true) {
            return this.render();
        }

        // Unreachable.
        return 'no';
    }

    render(): string {
        return this.getDefaultProps().text;
    }
}
