function hello(r) {
    // r.return(200, JSON.stringify({
    //     njsModuleVersion: njs.version,
    //     nginxVersion: r.variables.nginx_version
    // }));

    ngx.fetch(`http://${r.args.url}`)
        .then(reply => reply.text())
        .then(body => {
            r.headersOut['Content-Type'] = "text/html; charset=utf-8";
            r.return(200, body);
        })
        .catch(e => r.return(501, e.message));
}

export default {hello};
