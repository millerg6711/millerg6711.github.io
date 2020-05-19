        $(function () {

            var qsRegex;

            // init Isotope
            var $container = $('.isotope').isotope({
                itemSelector: '.element-item',
                layoutMode: 'masonry',
                getSortData: {
                    name: '.name',
                    number: '.number parseInt',
                    category: '[data-category]'
                },
                sortAscending: false,
                filter: function () {
                    return qsRegex ? $(this).text().match(qsRegex) : true;
                }

            });

            var $quicksearch = $('.quicksearch').keyup(debounce(function () {
                qsRegex = new RegExp($quicksearch.val(), 'gi');
                $container.isotope();
            }, 200));
            // debounce so filtering doesn't happen every millisecond
            function debounce(fn, threshold) {
                var timeout;
                return function debounced() {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                }
            }

            $('#shuffle').click(function () {
                $container.isotope('shuffle');
            });
            // bind sort button click
            $('#sorts').on('click', 'div', function () {
                var sortByValue = $(this).attr('data-sort-by');
                $container.isotope({
                    sortBy: sortByValue
                });
            });
            // bind filter select on change
            $('#filters-select').on('click', 'div', function () {
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
            });
            // change is-checked class on buttons
            $('.buttons').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });
        });


        var clipboard = new Clipboard('.btn');

        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            toastr.success('Refferal Code has been copied!');

            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });

        $(document).ready(function () {
            $('.ui.sidebar').sidebar({});
            // For responsive sidebar menu
            $("a.sidebar-toggle").click(function () {
                $('.ui.sidebar').sidebar('toggle');
            });
        });


        $(".ui.dropdown").dropdown();

        $(".ui.accordion").accordion();
