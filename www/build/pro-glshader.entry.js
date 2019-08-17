import { r as registerInstance, B as Build, h, c as getElement } from './core-d92b5eae.js';

const DEFAULT_VERT = `attribute vec2 a_position;
void main() {gl_Position = vec4(a_position, 0, 1);}`;
const DEFAULT_FRAG = `void main() {gl_FragColor = vec4(0, 0, 0, 1);}`;
const GLShader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.glPosBuffer = null;
        this.glProgram = null;
        this.gl = null;
        this.enabled = true;
        this.ready = true;
        this.vert = DEFAULT_VERT;
        this.retina = false;
        this.frag = DEFAULT_FRAG;
        this.uniforms = {};
    }
    shaderChanged() {
        this.compileShader();
        this.resolveUniforms();
        this.renderGL();
    }
    uniformsChanged() {
        this.resolveUniforms();
        this.renderGL();
    }
    componentDidLoad() {
        if (Build.isBrowser && this.canvas) {
            this.resize();
            const gl = this.gl = this.canvas.getContext('webgl');
            gl.getExtension('OES_standard_derivatives');
            gl.getExtension('EXT_shader_texture_lod');
            if (!gl) {
                console.warn('webgl is not available');
                this.canvas = undefined;
                this.enabled = false;
                return;
            }
            this.initGL();
            this.compileShader();
            this.resolveUniforms();
            this.renderGL();
        }
    }
    resize() {
        const canvas = this.canvas;
        if (!canvas) {
            return;
        }
        const f = (this.retina) ? window.devicePixelRatio : 1;
        // Lookup the size the browser is displaying the canvas.
        const displayWidth = canvas.clientWidth * f;
        const displayHeight = canvas.clientHeight * f;
        // Check if the canvas is not the same size.
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            // Make the canvas the same size
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            if (this.gl) {
                this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            }
        }
    }
    resolveUniforms() {
        const gl = this.gl;
        if (!gl) {
            return;
        }
        const uniforms = this.uniforms;
        const keys = Object.keys(uniforms);
        gl.useProgram(this.glProgram);
        for (let key of keys) {
            const [prefix, uniform] = key.split(':', 2);
            const loc = gl.getUniformLocation(this.glProgram, uniform);
            const value = uniforms[key];
            gl['uniform' + prefix](loc, value);
        }
    }
    initGL() {
        const gl = this.gl;
        if (!gl) {
            return;
        }
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        const positionBuffer = this.glPosBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = new Float32Array([
            1.0, 1.0, -1.0, 1.0,
            1.0, -1.0, -1.0, -1.0,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    }
    compileShader() {
        const gl = this.gl;
        if (!gl) {
            return;
        }
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, this.vert);
        gl.compileShader(vertexShader);
        const log = gl.getShaderInfoLog(vertexShader);
        if (log) {
            console.debug(log);
        }
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, this.frag);
        gl.compileShader(fragmentShader);
        const log2 = gl.getShaderInfoLog(fragmentShader);
        if (log2) {
            console.debug(log2);
        }
        const program = this.glProgram = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
    }
    renderGL() {
        const gl = this.gl;
        if (!gl) {
            return;
        }
        if (!this.ready) {
            gl.clearColor(0.03, 0.05, 0.07, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.flush();
            return;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.glPosBuffer);
        const positionLocation = gl.getAttribLocation(this.glProgram, "a_position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.useProgram(this.glProgram);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    render() {
        if (this.enabled) {
            this.resize();
            return h("canvas", { ref: el => this.canvas = el });
        }
        else {
            return null;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "vert": ["shaderChanged"],
        "frag": ["shaderChanged"],
        "uniforms": ["uniformsChanged"]
    }; }
    static get style() { return ":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\ncanvas {\n  width: 100%;\n  height: 100%;\n}"; }
};

export { GLShader as pro_glshader };
