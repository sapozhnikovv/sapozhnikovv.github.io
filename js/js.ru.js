window.Clipboard = (function(window, document, navigator) {
			var textArea,
				copy;

			function isOS() {
				return navigator.userAgent.match(/ipad|iphone/i);
			}

			function createTextArea(text) {
				textArea = document.createElement('textArea');
				textArea.value = text;
				document.body.appendChild(textArea);
			}

			function selectText() {
				var range,
					selection;

				if (isOS()) {
					range = document.createRange();
					range.selectNodeContents(textArea);
					selection = window.getSelection();
					selection.removeAllRanges();
					selection.addRange(range);
					textArea.setSelectionRange(0, 999999);
				} else {
					textArea.select();
				}
			}

			function copyToClipboard() {        
				document.execCommand('copy');
				document.body.removeChild(textArea);
			}

			copy = function(text) {
				createTextArea(text);
				selectText();
				copyToClipboard();
			};

			return {
				copy: copy
			};
		})(window, document, navigator);
		
		function copyFn(id, inp, tt) {
		  var copyText = document.getElementById(inp);
		  Clipboard.copy(copyText.value);
		  var previous = $('#'+id).attr("data-original-title");
		  $('#'+id).attr('data-original-title','Скопировано: '+copyText.value);
		  $('#'+tt).tooltip('hide');
		  $('#'+id).tooltip('show');
		  setTimeout(function() {
			$('#'+id).tooltip('hide');
			$('#'+id).attr('data-original-title',previous);
		  }, 3000);
		}
        $(document).ready(function () {
			$('.icon-copy').tooltip();
			$('#links > a').tooltip();
            $('a[class="scroll"]').click(function () {
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top;
                $('html,body').animate({
                    scrollTop: destination
                }, 500);
                return false;
            });
			$('#copy-mail').click(function () {
				copyFn('mail-text','mail-input', 'copy-mail');
                return false;
            });
        });