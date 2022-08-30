# gothcat.net

Source code for the [gothcat personal website](http://gothcat.net).

## Server configuration

[gothcat.net](http://gothcat.net) is served using the Ubuntu Server 22.04 LTS
distribution of Apache 2.

To host the server, this repo should be cloned; the `public` directory should be
symbolically linked to `/var/www/html/gothcat.net/public` and owned by the
`www-data` user and group.

Required modules:
- `include`

Required properties in `/etc/apache2/apache2.conf`:
```Apache
<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride All
	Require all granted
</Directory>
```

Required properties in an enabled virtual host:
```Apache
<VirtualHost *:80>
	DocumentRoot "/var/www/html/gothcat.net/public"
</VirtualHost>
```

## License

Code, excluding personal content and various assets, is copyright (c) 2022
Natalie Wiggins.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

Written by Natalie Wiggins.

See `LICENSE` and `AUTHORS` for more information.

### Personal content

All personal content is (c) Natalie Wiggins 2022, all rights reserved.

Personal content includes information, images and paragraphs specific to the
author.

### Assets

`public/assets/icon{,_circle}.*` and `public/favicon.ico` are (c) [Cosmitasia](https://twitter.com/cosmitasia)
from [Picrew](https://picrew.me/).