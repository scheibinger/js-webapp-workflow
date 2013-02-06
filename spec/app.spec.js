describe('app', function () {
    beforeEach(function () {
        var that = this,
            done = false;

        require(['app/scripts/app'], function (app) {
            done = true;
        });

        waitsFor(function () {
            return done;
        }, "Create app");
    });

    describe('.Create()', function () {
        it('should create an app', function () {
            var done = true;
            return done;
        });
    });

});

